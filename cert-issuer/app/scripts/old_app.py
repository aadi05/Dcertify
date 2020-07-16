import pyfiglet 
import logging 
import FileMangement as fm
import JSONblockstoCert as jtbc
import DataToJSONDir    as dtjd
import os
if __name__ == "__main__":
    d = dtjd.DataToJSONDir()
    j = jtbc.JSONblockstoCert()
    result = pyfiglet.figlet_format("Cert \n Creator")
    print("===========================================") 
    print(result)
    print("===========================================")
    #Logs.log file stores the programs logs
    logging.basicConfig(filename="Logs.log", 
                    format='%(asctime)s %(message)s', 
                    filemode='w')
    #Creating an object 
    logger=logging.getLogger() 
  
    #Setting the threshold of logger to DEBUG 
    logger.setLevel(logging.DEBUG)


    #pass
    #create a class of cretificate
    #select a source of certificate(data.csv)
    #DataToJSONdir
    #JSONblockstocer
    #end
    
