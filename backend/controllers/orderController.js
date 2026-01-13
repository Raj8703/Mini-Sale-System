import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const { customerName, productId, quantity } = req.body;

    if (!customerName || !productId || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (quantity > product.stock) {
      return res.status(400).json({
        message: "Insufficient stock",
        availableStock: product.stock,
      });
    }

    product.stock -= quantity;
    await product.save();

    const order = await Order.create({
      customerName,
      product: productId,
      quantity,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
