-- CreateTable
CREATE TABLE "Goodies" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "picture" TEXT,
    "standard_price" DOUBLE PRECISION,
    "reduced_price" DOUBLE PRECISION,

    CONSTRAINT "Goodies_pkey" PRIMARY KEY ("id")
);
