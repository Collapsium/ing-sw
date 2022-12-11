-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "marca" VARCHAR,
    "nombre" VARCHAR,
    "costo" INTEGER,
    "stock" INTEGER,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ventas" (
    "ID_Serial" SERIAL NOT NULL,
    "ID_usuario" INTEGER NOT NULL,
    "Estado" TEXT,

    CONSTRAINT "Ventas_pkey" PRIMARY KEY ("ID_Serial")
);

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "numerito" INTEGER NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ventas_ID_usuario_key" ON "Ventas"("ID_usuario");
