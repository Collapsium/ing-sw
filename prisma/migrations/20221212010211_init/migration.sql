-- CreateTable
CREATE TABLE "usuario" (
    "id_serial" SERIAL NOT NULL,
    "correo" TEXT,
    "password" TEXT,
    "nombre" TEXT,
    "tipo_usuario" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_serial")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "marca" VARCHAR,
    "nombre" VARCHAR,
    "costo" INTEGER,
    "stock" INTEGER,
    "imagen" TEXT,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ventas" (
    "id_serial" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "estado" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("id_serial")
);

-- CreateTable
CREATE TABLE "ventas_detalle" (
    "id_serial" SERIAL NOT NULL,
    "id_venta" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ventas_detalle_pkey" PRIMARY KEY ("id_serial")
);

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "numerito" INTEGER NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ventas_id_usuario_key" ON "ventas"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ventas_detalle_id_venta_key" ON "ventas_detalle"("id_venta");

-- CreateIndex
CREATE UNIQUE INDEX "ventas_detalle_id_producto_key" ON "ventas_detalle"("id_producto");

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_serial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ventas_detalle" ADD CONSTRAINT "ventas_detalle_id_venta_fkey" FOREIGN KEY ("id_venta") REFERENCES "ventas"("id_serial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ventas_detalle" ADD CONSTRAINT "ventas_detalle_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
