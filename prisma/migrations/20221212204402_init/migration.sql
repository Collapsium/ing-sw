-- CreateTable
CREATE TABLE "carrito" (
    "id_cliente" INTEGER NOT NULL,
    "id_producto" INTEGER,
    "cantidad" INTEGER,

    CONSTRAINT "carrito_pkey" PRIMARY KEY ("id_cliente")
);
