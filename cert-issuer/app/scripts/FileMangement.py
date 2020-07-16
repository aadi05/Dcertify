import os
import shutil
import logging

class FileMangement():
    #root of the files
    root = ""
    #Sub Folders of the root folder
    jsonFolder        = "Uncertificates"
    certificateFolder = "Certificates"
    blockdata         = "BlockchainSmartcontractData"
    
    #logger
    logger = logging.getLogger()

    def __init__(self,pathToBatches):
        self.root = pathToBatches
        #Logs.log file stores the programs logs
        logging.basicConfig(filename="Logs.log", 
                    format='%(asctime)s %(message)s', 
                    filemode='w')
        #Creating an object 
        logger=logging.getLogger() 
  
        #Setting the threshold of logger to DEBUG 
        logger.setLevel(logging.DEBUG)
    
    # creates a "class" is a unique batches of certificates 
    def createClass(self,classname):
        try:
            os.makedirs(os.path.join(self.root, classname))
            self.logger.error("directory named for class "+str(classname)+" created")
        except OSError:
            self.logger.error("directory named for class "+str(classname)+" already present")

     # creates a sub directories in a given class
     # 3 subs are created Certificates,JSONBlocks,blockdata    
    def createWorkingDirectories(self,classname):
        try:  
            os.makedirs(os.path.join(classname, self.jsonFolder))
            os.makedirs(os.path.join(classname, self.certificateFolder))
            os.makedirs(os.path.join(classname, self.blockdata))
            self.logger.info("directories created")
        except OSError :  
            self.logger.error("directories already present")
    
    # path givers
    def getpathJSONBlockData(self):
        return str(os.path.join(self.root, self.jsonFolder))

    def getpathJSONblocks(self):
        return str(os.path.join(self.root, self.blockdata))

    def getpathCertificates(self):
        return str(os.path.join(self.root, self.certificateFolder))

    def getpathclassNamer(self,classname):
        return str(os.path.join(self.root, classname))





