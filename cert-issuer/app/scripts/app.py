from flask import Flask,render_template,request,redirect,send_from_directory
import os
import tempfile
import DataToJSONDir as dtj ,JSONblockstoCert as jtc
import shutil

app = Flask(__name__)
#intialize logging
#set schema 
schema = os.path.join(os.getcwd(),"JSONschema/schema.json")
certificate = "/home/aditya/Documents/projects/app/srcipts/certificate"
#instance of dependencies
DataToJSON = dtj.DataToJSONDir()
JSONToCert = jtc.JSONblockstoCert()

#main form with  src file uploading
@app.route("/form", methods=["GET","POST"])
def form():
    if request.method =="POST":
        if request.files:   
            csvf = request.files['csvf']
            temp_dir = []
            temp_dir.append(tempfile.mkdtemp())# 0     | pathToCsv
            temp_dir.append(tempfile.mkdtemp())# 1     | pathToUncertificate
            temp_dir.append(tempfile.mkdtemp())# 2     | pathToCertificate
            
            # path assigned for csv file to temp folder[0]
            pathToCsv = os.path.join(temp_dir[0],"certs.csv")
            # file is saved in temporary folder with path pathToCsv
            csvf.save(pathToCsv)
            # Csv file data is parsed and the record are converted into
            # individual json files with json schema
            DataToJSON.csvToJsonBlocks(pathToCsv, temp_dir[1], schema)
            # merkle tree is created root and proof are appended to individual json files respectively
            JSONToCert.mkTree(temp_dir[1],temp_dir[2])
            
            #removing temporary files
            shutil.rmtree(temp_dir[0])
            shutil.rmtree(temp_dir[1])  
            shutil.rmtree(temp_dir[2])
            return redirect("http://127.0.0.1:5000/getcert", code=302)
    return render_template('form.html')

@app.route('/getcert', methods=["GET","POST"])
def generate_cert():
    rootcount = JSONToCert.get_root_count()
    if request.method =="POST":     
            return redirect("http://127.0.0.1:5000/getcert/download", code=302)
    return render_template('done.html',rootcount=rootcount)

@app.route('/getcert/download')
def download_file():
    return send_from_directory(certificate,
                               "certs.zip", as_attachment=True)  
if __name__=="__main__":
    app.run(debug=True)

