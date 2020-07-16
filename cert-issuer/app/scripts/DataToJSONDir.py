import json
import csv
import os
class DataToJSONDir():

    def csvToJsonBlocks(self, pathToCsv, pathToJSONblocks, pathToJSONschema):
        #extension of the output file
        extension = ".json"

        #Reading the csv path
        with open(pathToCsv, "r") as f:
            reader = csv.reader(f)
            key = next(reader)
            dat = list(reader)

        #loading the schema from the path
        with open(pathToJSONschema) as f:
            data = json.load(f)

        #loading csv to multiple json files    
        for i in dat:
            diction = {}
            for index in range(len(key)):
                diction[key[index]]=i[index]
            certdata = json.dumps(diction)
            cd = json.loads(certdata)
            data['CertificateData']=cd
            
            #first row of the csv file is the name of the json file
            name = i[0]+extension


            jsonfile = open(os.path.join(pathToJSONblocks,name),'x')
            json.dump(data,jsonfile)
            

            
                
                
        
        

