The **infinite square well (I.S.W.)** refers to a particle under the influence of a potential

$$
V(x) = \begin{cases} 0 & 0 \leq x \leq a \\\\ \infty & \text{otherwise} \end{cases}
$$

[[_TOC_]]

# Solution

Fortunately, we can solve the infinite square well. Outside the well, $\psi(x) = 0$. Inside the well, $V=0$ and the [[time independent Schrodinger equation|Schrodinger equation#time-independent-schrodinger-equation]] gives us a differential equation to solve

\begin{gather}
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{} x^2} = E \psi \\\\
\psi(0) = 0 \\\\
\psi(a) = 0,
\end{gather}

where these last two boundary conditions come from wanting $\psi$ to be continuous and noting that $\psi =  0$ where the potential is infinite. The [[stationary states|stationary state]], indexed by positive integers $n$, are

$$
\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left( \frac{n\pi}{a}x \right),
$$

carrying energy 

$$
E_n = \frac{n^2 \pi^2 \hbar\^2}{2ma^2}.
$$

Therefore,

$$
\Psi_n(x, t) = \sqrt{\frac{2}{a}} \sin\left( \frac{n\pi}{a}x \right) e^{-\iota \left(n\^2\pi\^2\hbar^2 / 2ma^2\right)t}
$$

## Derivation

More neatly,

$$
\frac{\dd{}^2 \psi}{\dd{} x^2} = -k^2 \psi, \qquad k = \frac{\sqrt{2mE}}{\hbar}
$$

This equation is exactly what we have for the [[simple harmonic motion]], and in fact

$$
\psi(x) = A\sin(kx) + B\cos(kx)
$$

Then, the allowed energies are

$$
E_n = \frac{k_n^2 \hbar}{2m} = \frac{n^2 \pi^2 \hbar\^2}{2ma^2}
$$

The solutions look like

$$
\psi_n(x) = A\sin(kx)
$$

Integrating to normalize,

$$
\int_0^a \dd{x} \cdot |A|^2 \sin^2 (k_nx) = |A|^2 \frac{a}{2} \implies A = \sqrt{\frac{2}{a}}
$$