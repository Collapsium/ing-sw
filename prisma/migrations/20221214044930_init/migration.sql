/*
  Warnings:

  - Made the column `id_cliente` on table `carrito` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "carrito" ALTER COLUMN "id_cliente" SET NOT NULL;
