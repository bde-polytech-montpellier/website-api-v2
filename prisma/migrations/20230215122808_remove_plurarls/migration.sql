/*
  Warnings:

  - You are about to drop the `EventImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goodies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventImages" DROP CONSTRAINT "EventImages_event_id_fkey";

-- DropForeignKey
ALTER TABLE "EventImages" DROP CONSTRAINT "EventImages_user_id_fkey";

-- DropTable
DROP TABLE "EventImages";

-- DropTable
DROP TABLE "Goodies";

-- CreateTable
CREATE TABLE "EventImage" (
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "EventImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goodie" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "picture" TEXT,
    "standard_price" DOUBLE PRECISION,
    "reduced_price" DOUBLE PRECISION,

    CONSTRAINT "Goodie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventImage" ADD CONSTRAINT "EventImage_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventImage" ADD CONSTRAINT "EventImage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
