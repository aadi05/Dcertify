import merkletools as mk
import hashlib
import json
import os
import shutil
class JSONblockstoCert():

    certs = []
    extension =".json"
    m = mk.MerkleTools()

    def get_hash(self,d, mode='sha256'):
        h = hashlib.new(mode)
        h.update(d.encode())
        digest = h.hexdigest()
        return digest
        

    def mkTree(self,pathTOjsonblocks,pathToCertificates):
            jsonfiles = []
            name = pathToCertificates[-5:1]
            files = os.listdir(pathTOjsonblocks)
            # opens all the json files in the pathTOjsonblocks directory and appends it in a list
            for f in files:
                if self.extension in f:
                    jfile = json.load(open(os.path.join(pathTOjsonblocks,f),"r",encoding="utf-8"))
                    jsonfiles.append(jfile)
            
            # gets the "Certificate Data" from the jsonfiles and adds the hash to a list 
            for cert in jsonfiles:
                certi = cert['CertificateData']
                cert_string = json.dumps(certi,separators=(',', ':'))
                print(cert_string)
                digest = self.get_hash(cert_string)
                print(digest)
                self.m.add_leaf(digest)

            # adds hash of the certs to leaf and construct a merkel tree    
            self.m.make_tree()
            
            #
            for i in range(len(files)):
                proof = self.m.get_proof(i)
                cert_string = jsonfiles[i]
                cert_string['MerkleRoot']=self.m.get_merkle_root()
                cert_string['MerkleProof']=proof
                jsonfil = open(os.path.join(pathToCertificates,files[i]),"x")
                json.dump(cert_string,jsonfil)
                print(cert_string['MerkleProof'],"\n")
            self.m.reset_tree()  
            Zipper(pathToCertificates,name)
            
def Zipper(pathToCertificates,name):
    shutil.make_archive("certificate/certs", 'zip', pathToCertificates)
