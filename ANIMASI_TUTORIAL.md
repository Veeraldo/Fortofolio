# 🎨 Tutorial Animasi Website

## Cara Menggunakan Animasi yang Sudah Dibuat

### 1. Animasi Entrance (Muncul)

Gunakan class berikut untuk membuat elemen muncul saat halaman dimuat:

```jsx
// Fade In (muncul perlahan dari bawah)
<h1 className="animate-fade-in">Judul Anda</h1>

// Slide dari Kiri
<div className="animate-slide-left">Konten</div>

// Slide dari Kanan
<div className="animate-slide-right">Konten</div>

// Scale Up (membesar)
<button className="animate-scale">Tombol</button>
```

### 2. Animasi Continuous (Terus Menerus)

Untuk animasi yang berjalan terus:

```jsx
// Bounce (memantul)
<div className="animate-bounce">⬇️ Scroll</div>

// Rotate (berputar)
<div className="animate-rotate">⚙️</div>
```

### 3. Hover Effects (Animasi saat Mouse di Atas)

```jsx
// Membesar sedikit
<button className="hover-grow">Hover Saya</button>

// Naik ke atas dengan shadow
<div className="hover-lift">Card dengan efek lift</div>

// Bercahaya
<div className="hover-glow">Glow effect</div>
```

### 4. Delay (Animasi Berurutan)

Buat elemen muncul berurutan:

```jsx
<h1 className="animate-fade-in">Muncul Pertama</h1>
<p className="animate-fade-in delay-1">Muncul Kedua</p>
<p className="animate-fade-in delay-2">Muncul Ketiga</p>
<p className="animate-fade-in delay-3">Muncul Keempat</p>
```

---

## 🚀 Membuat Animasi Custom Sendiri

### Langkah 1: Buat Keyframe di globals.css

```css
@keyframes namaAnimasiKamu {
  from {
    /* State awal */
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    /* State akhir */
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Langkah 2: Buat Class untuk Digunakan

```css
.animate-custom {
  animation: namaAnimasiKamu 1s ease-out;
}
```

### Langkah 3: Pakai di Component

```jsx
<div className="animate-custom">Konten Anda</div>
```

---

## 📖 Contoh Animasi Custom

### Animasi Shake (Goyang)

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}
```

### Animasi Pulse (Denyut)

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
```

### Animasi Flip (Membalik)

```css
@keyframes flip {
  from { transform: rotateY(0); }
  to { transform: rotateY(360deg); }
}

.animate-flip {
  animation: flip 1s ease-in-out;
}
```

---

## 🎯 Tips & Trik

### 1. Mengatur Kecepatan Animasi

```jsx
// Lambat (2 detik)
<div style={{animation: 'fadeIn 2s ease-out'}}>Lambat</div>

// Cepat (0.3 detik)
<div style={{animation: 'fadeIn 0.3s ease-out'}}>Cepat</div>
```

### 2. Mengatur Timing Function

```css
ease-out     /* Mulai cepat, akhir lambat (paling natural) */
ease-in      /* Mulai lambat, akhir cepat */
ease-in-out  /* Lambat di awal dan akhir */
linear       /* Kecepatan konstan */
```

### 3. Kombinasi Animasi

```jsx
<div className="animate-fade-in animate-bounce delay-1">
  Fade in, terus bounce!
</div>
```

### 4. Animasi dengan Inline Style

```jsx
<div style={{
  animation: 'fadeIn 1s ease-out, bounce 2s infinite',
  animationDelay: '0.5s'
}}>
  Custom timing!
</div>
```

---

## 🔥 Library Animasi Profesional (Opsional)

Jika ingin animasi lebih kompleks, install Framer Motion:

```bash
npm install framer-motion
```

Contoh penggunaan:

```jsx
import { motion } from 'framer-motion';

export default function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Konten dengan Framer Motion
    </motion.div>
  );
}
```

---

## 💡 Ide Animasi untuk Portfolio

1. **Hero Section**: Fade in dengan delay untuk teks dan tombol
2. **Navbar**: Slide dari atas saat load
3. **Cards/Projects**: Hover lift effect
4. **Skills**: Scale up dengan delay berurutan
5. **Contact**: Bounce effect untuk icon
6. **Footer**: Fade in dari bawah

---

## ⚠️ Best Practices

1. **Jangan berlebihan** - Terlalu banyak animasi = lambat dan mengganggu
2. **Gunakan ease-out** - Paling natural untuk kebanyakan animasi
3. **Durasi ideal**: 0.3s - 1s untuk entrance animations
4. **Test di mobile** - Pastikan tidak lag di HP
5. **Accessibility** - Respect user yang prefer reduced motion

---

**Selamat Berkreasi! 🎉**
