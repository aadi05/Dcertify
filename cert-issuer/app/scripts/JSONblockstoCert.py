import merkletools as mk
import hashlib
import json
import os
import shutil
import time
class JSONblockstoCert():

    extension =".json"
    m = mk.MerkleTools()
    root = ""
    count = ""
    def get_hash(self,d, mode='sha256'):
        h = hashlib.new(mode)
        h.update(d.encode())
        digest = h.hexdigest()
        return digest
        
    def mkTree(self,pathTOjsonblocks,pathToCertificates):
            self.reset_root_count()
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
                digest = self.get_hash(cert_string)
                print(digest)
                self.m.add_leaf(digest)

            # adds hash of the certs to leaf and construct a merkel tree    
            self.m.make_tree()
            
            #
            print(len(files))
            for i in range(len(files)):
                proof = self.m.get_proof(i)
                cert_string = jsonfiles[i]
                cert_string['MerkleRoot']=self.m.get_merkle_root()
                cert_string['MerkleProof']=proof
                cert_string["Metadata"]["datetime"] = time.time()
                jsonfil = open(os.path.join(pathToCertificates,files[i]),"x")
                json.dump(cert_string,jsonfil)
                #print(cert_string['MerkleProof'],"\n")
            self.set_root_count(str(self.m.get_merkle_root()),str(len(files)))
            self.m.reset_tree()  
            self.Zipper(pathToCertificates,name)
            
    def Zipper(self,pathToCertificates,name):
        shutil.make_archive("certificate/certs", 'zip', pathToCertificates)

#getting root and count
    def set_root_count(self,root,count):
        self.root = root
        self.count = count

    def reset_root_count(self):
        self.root = ""
        self.count = ""

    def get_root_count(self):
        return str(self.root)+"/"+str(self.count)
