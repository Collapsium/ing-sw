/*
  Warnings:

  - The primary key for the `carrito` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "carrito" DROP CONSTRAINT "carrito_pkey",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imagen" TEXT,
ADD COLUMN     "marca" VARCHAR,
ADD COLUMN     "nombre" VARCHAR,
ALTER COLUMN "id_cliente" DROP NOT NULL,
ADD CONSTRAINT "carrito_pkey" PRIMARY KEY ("id");
