import sqlite3
import re

def lookup(word):
    l1 = c.execute('select * from words where \'' + word + '\' like words.word')
    for l in l1:
        print l

conn = sqlite3.connect('./rid_db.sql')

c = conn.cursor()

f_main = open('RID.CAT')
f_exc = open('RID.exc')

c.execute('drop table words;')
c.execute('drop table exclude;')

for e in c.execute('select * from sqlite_master;'):
    print e

c.execute('create table words(word varchar(20), maincat varchar(20), subcat1 varchar(20), subcat2 varchar(20));')
c.execute('create table exclude(word varchar(20));')

sss_cats = []
ss_cats = []
s_cats = []
main_cats = []

lines = f_main.readlines()

cat1=''
cat2=''
cat3=''

for line in lines:
    if re.match('\t\t\t\t*', line):
        word = line.strip()
        t = (word, cat1, cat2, cat3)
        c.execute('insert into words values(?,?,?,?);', t)
    elif re.match('\t\t\t*', line):
        cat3 = line.strip()
    elif re.match('\t\t*', line):
        cat2 = line.strip()
    else:
        cat1 = line.strip()

for line in f_exc.readlines():
    t = tuple([line.strip()])
    c.execute('insert into exclude values(?);', t)

l1 = c.execute('select * from words where \'ABSINTHYA:KJSD\' like words.word')
for l in l1:
    print l

#print main_cats
