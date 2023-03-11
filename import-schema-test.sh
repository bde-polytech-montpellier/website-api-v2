SQL_SCHEMA_LOC="./migrations"
SCHEMA_FILES=$(cd prisma && find $SQL_SCHEMA_LOC -name "*.sql" -print)

for FILE in $SCHEMA_FILES
do
    docker exec -it bde-db-test psql -U test -f home/$FILE
done