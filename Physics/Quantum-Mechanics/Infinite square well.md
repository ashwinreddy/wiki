The **infinite square well** refers to a particle under the influence of a potential

$$
V(x) = \begin{cases} 0 & 0 \leq x \leq a \\\\ \infty & \text{otherwise} \end{cases}
$$

Fortunately, we can solve the infinite square well. Outside the well, $\psi(x) = 0$. Inside the well, $V=0$ and the [[Schrodinger equation]] says

$$
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{} x^2} = E \psi
$$

More neatly,

$$
\frac{\dd{}^2 \psi}{\dd{} x^2} = -k^2 \psi, \qquad k = \frac{\sqrt{2mE}}{\hbar}
$$

This equation is exactly what we have for the [[simple harmonic motion]], and in fact

$$
\psi(x) = A\sin(kx) + B\cos(kx)
$$

The boundary conditions are $\psi(0) = 0$ and $\psi(a)=a$ in order to be continuous since $\psi(0)=0$ when the potential jumps to infinity.


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