# Paradise Nursery Shopping Application 🌱

A modern React e-commerce application for plant shopping with full Redux state management and responsive design.

## 🌟 Project Overview

Paradise Nursery is a complete shopping application that allows users to browse various house plants, add them to a shopping cart, and manage their purchases. The application features a beautiful landing page, comprehensive product listings, and a fully functional shopping cart.

## ✨ Features Implemented

### 🏠 Landing Page
- **Company introduction** with engaging background
- **Company name and tagline**: "Paradise Nursery - Where Green Meets Serenity"
- **Get Started button** that navigates to product listings
- **Responsive design** with smooth transitions

### 🛍️ Product Listing Page
- **Categorized plant display** with 5+ categories:
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- **Product cards** showing:
  - Plant images
  - Names and descriptions
  - Pricing information
  - Add to Cart buttons
- **Dynamic button states**: "Add to Cart" → "Added to Cart" (disabled)
- **Live cart counter** in navigation header
- **Redux integration** for state management

### 🛒 Shopping Cart Page
- **Cart item management** with individual cards for each plant type
- **Quantity controls**: Increment (+) / Decrement (-) buttons
- **Smart quantity logic**: Auto-remove items when quantity reaches 0
- **Delete functionality** to remove items completely
- **Real-time calculations**:
  - Individual item subtotals
  - Total cart amount
  - Live cart counter updates
- **Continue Shopping** button to return to product listings
- **Checkout button** (placeholder for future implementation)

## 🛠️ Technical Implementation

### **Task 1: ProductList Component Layout**
- ✅ Dynamic plant array rendering using `map()` method
- ✅ Responsive product grid layout
- ✅ State management for cart tracking
- ✅ Button state synchronization

### **Task 2: Redux State Management**
- ✅ **CartSlice** implementation with three reducers:
  - `addItem()`: Adds plants to cart or increments quantity
  - `removeItem()`: Removes items completely from cart
  - `updateQuantity()`: Updates item quantities
- ✅ **Redux Store** configuration with cart reducer
- ✅ **Provider** setup for global state access

### **Task 3: CartItem Component**
- ✅ Total amount calculation for all cart items
- ✅ Individual item subtotal calculations
- ✅ Increment/decrement functionality with smart logic
- ✅ Remove item functionality
- ✅ Continue shopping navigation
- ✅ Real-time UI updates

### **Task 4: Redux Integration**
- ✅ **ProductList** Redux integration:
  - `useSelector` for cart state access
  - `useDispatch` for adding items
  - Live cart counter display
- ✅ **CartItem** Redux integration:
  - Full CRUD operations on cart items
  - Real-time state synchronization
- ✅ **Centralized state management** across components

## 🚀 Technologies Used

- **React 18** with functional components and hooks
- **Redux Toolkit** for state management
- **CSS3** for styling and responsive design
- **Vite** for build tooling and development server
- **Git** for version control

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Jefranulislam/e-plantShopping.git

# Navigate to project directory
cd e-plantShopping

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Features Highlights

### Real-time Updates
- **Cart counter** updates instantly when items are added/removed
- **Button states** sync automatically with cart contents
- **Totals recalculate** immediately on quantity changes
- **UI synchronization** across all components

### User Experience
- **Intuitive navigation** between landing, products, and cart pages
- **Visual feedback** with disabled states and text changes
- **Responsive design** works on all device sizes
- **Smooth transitions** and professional styling

### Code Quality
- **Clean component architecture** with separation of concerns
- **Redux best practices** with normalized state structure
- **Reusable components** and efficient state management
- **Error-free builds** with optimized production bundles

## 📋 Project Status

**✅ COMPLETED** - All tasks implemented and tested:
- [x] Task 1: ProductList Component Layout
- [x] Task 2: Redux State Management  
- [x] Task 3: CartItem Component
- [x] Task 4: Redux Integration

## 🔮 Future Enhancements

- **Checkout functionality** with payment integration
- **User authentication** and account management
- **Product search and filtering**
- **Wishlist functionality**
- **Order history and tracking**
- **Admin panel for inventory management**

## 👨‍💻 Developer

**Jefranul Islam**  
GitHub: [@Jefranulislam](https://github.com/Jefranulislam)

---

**Paradise Nursery** - *Where Green Meets Serenity* 🌱