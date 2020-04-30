The **central limit theorem (CLT)** says the sum of [[iid|independent and identically distributed]] variables $X_1, \dots X_n$ approaches Gaussian.

$$
Z_n = \frac{\sum_{i=1}^n X_i - n\mu}{\sqrt{n \sigma^2}}
$$

$$
\lim_{n \to\infty}\mathbb{P}[Z_n \leq z] = \int_{-\infty}^z \frac{1}{\sqrt{2\pi}} e^{-x^2/2}\dd{x}
$$