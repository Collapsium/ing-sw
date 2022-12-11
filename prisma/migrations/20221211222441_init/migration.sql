-- AlterTable
ALTER TABLE "Ventas" ADD COLUMN     "Created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Usuario" (
    "ID_serial" SERIAL NOT NULL,
    "Correo" TEXT,
    "Password" TEXT,
    "Nombre" TEXT,
    "Tipo_usuario" TEXT,
    "Created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("ID_serial")
);

-- CreateTable
CREATE TABLE "Ventas_Detalle" (
    "ID_Serial" SERIAL NOT NULL,
    "ID_Venta" INTEGER NOT NULL,
    "ID_Producto" INTEGER NOT NULL,
    "Cantidad" INTEGER,
    "Created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ventas_Detalle_pkey" PRIMARY KEY ("ID_Serial")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ventas_Detalle_ID_Venta_key" ON "Ventas_Detalle"("ID_Venta");

-- CreateIndex
CREATE UNIQUE INDEX "Ventas_Detalle_ID_Producto_key" ON "Ventas_Detalle"("ID_Producto");

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_ID_usuario_fkey" FOREIGN KEY ("ID_usuario") REFERENCES "Usuario"("ID_serial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ventas_Detalle" ADD CONSTRAINT "Ventas_Detalle_ID_Venta_fkey" FOREIGN KEY ("ID_Venta") REFERENCES "Ventas"("ID_Serial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ventas_Detalle" ADD CONSTRAINT "Ventas_Detalle_ID_Producto_fkey" FOREIGN KEY ("ID_Producto") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
