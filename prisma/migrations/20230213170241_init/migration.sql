-- CreateTable
CREATE TABLE "Role" (
    "id" SMALLSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "permissionsId" SMALLINT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permissions" (
    "id" SMALLSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL DEFAULT 2,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "email" VARCHAR(255),
    "website" TEXT,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id" UUID NOT NULL,
    "partner_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "facebook" VARCHAR(255),
    "instagram" TEXT,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "picture" TEXT,
    "description" TEXT,
    "begin_date" DATE,
    "begin_time" TIME,
    "end_date" DATE,
    "end_time" TIME,
    "location" VARCHAR(255),
    "spacetime" VARCHAR(500),
    "price" DOUBLE PRECISION,
    "club_id" UUID,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventImages" (
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "EventImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_name_key" ON "Permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Club_facebook_key" ON "Club"("facebook");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "Permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_partner_id_fkey" FOREIGN KEY ("partner_id") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_club_id_fkey" FOREIGN KEY ("club_id") REFERENCES "Club"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventImages" ADD CONSTRAINT "EventImages_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventImages" ADD CONSTRAINT "EventImages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
