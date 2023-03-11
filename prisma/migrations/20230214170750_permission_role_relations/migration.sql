/*
  Warnings:

  - You are about to drop the column `begin_time` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `permissionsId` on the `Role` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_permissionsId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "begin_time",
DROP COLUMN "end_time",
DROP COLUMN "price",
ADD COLUMN     "reduced_price" DOUBLE PRECISION,
ADD COLUMN     "standard_price" DOUBLE PRECISION,
ALTER COLUMN "begin_date" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "end_date" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "permissionsId";

-- CreateTable
CREATE TABLE "_PermissionsToRole" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionsToRole_AB_unique" ON "_PermissionsToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionsToRole_B_index" ON "_PermissionsToRole"("B");

-- AddForeignKey
ALTER TABLE "_PermissionsToRole" ADD CONSTRAINT "_PermissionsToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionsToRole" ADD CONSTRAINT "_PermissionsToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
