import csv 
  
# field names 
fields = ['ID','Degree','Year','Name','Course','Organization','DOB','ClassCategory','College'] 
  
# data rows of csv file 
rows = [['XIEIT1617','Bachelor of Engineering','2020','Aditya Chandrashekhar Bhogate','Information Technology','University of Mumbai','16/08/1998',
        'First','Xavier Institute of Engineering'] for _ in range(1000)]
for i in range(1000):
     rows[i][0] = rows[i][0]+str(i)
  
# name of csv file 
  
# writing to csv file 
with open("students.csv", 'w') as csvfile: 
    # creating a csv writer object 
    csvwriter = csv.writer(csvfile) 
      
    # writing the fields 
    csvwriter.writerow(fields) 
      
    # writing the data rows 
    csvwriter.writerows(rows)