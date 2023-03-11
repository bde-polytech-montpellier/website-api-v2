##################################
### Import data from SQL files ###
##################################

SQL_FILES_LOC="./sql"
SQL_FILES=$(find $SQL_FILES_LOC -name "*.sql" -print)

for FILE in $SQL_FILES
do
    docker exec -it bde-db  psql -U postgres -f home/$FILE
done
