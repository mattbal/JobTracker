-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OFFERED', 'REJECTED', 'APPLIED', 'PENDING');

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobID" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "jobPost" TEXT NOT NULL,
    "dateApplied" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datePosted" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
