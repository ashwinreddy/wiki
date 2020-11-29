**Spin-½** is the most important case of [[spin]] $s = \frac{1}{2}$. Such particles have a permanent magnetic moment along the direction of their spin. 


There are just 2 eigenstates for $s=1/2$ that we could denote $\left|sm \right.\rangle$:

\begin{align}
\mid\uparrow \rangle &\doteq \left|\frac{1}{2}\frac{1}{2}\Bigg\rangle\right. \tag{Spin Up} \\\\
\mid\downarrow \rangle& \doteq \left|\frac{1}{2}\left(-\frac{1}{2}\right)\Bigg\rangle\right. \tag{Spin Down}
\end{align}

The spin matrices are related to the [[Pauli matrices]] by a constant scalar:

$$
S_i = \frac{\hbar}{2}\sigma_i
$$

\begin{gather}
\hat{S}_z \mid \uparrow \rangle = +\frac{\hbar}{2} \mid \uparrow \rangle \\\\
\hat{S}_z \mid \downarrow \rangle = -\frac{\hbar}{2} \mid \downarrow \rangle
\end{gather}

# Two particle system

Suppose you have two spin-half particles. For example, an electron and proton in the ground state of hydrogen. Since each can be spin up or spin down we have 4 states.

$$
S_z| s_1 s_2 m_1 m_2 \rangle = \hbar \underbrace{(m_1 + m_2)}_{m} |  s_1 s_2 m_1 m_2 \rangle
$$

|State|$m$|
|-----|----|
|$\mid \uparrow \uparrow \rangle$|1|
|$\mid \uparrow\downarrow  \rangle$|0|
|$\mid \downarrow \uparrow \rangle$|0|
|$\mid \downarrow \downarrow \rangle$|-1|

This splits into a triplet and singlet.

The triplet has states $|sm\rangle$ with $s=1$ and $m=1, 0, -1$:

$$
\begin{cases}  
|10\rangle &=\quad \frac{1}{\sqrt{2}}\Big(\mid \uparrow\downarrow  \rangle+\mid \downarrow \uparrow \rangle\Big) \\\\
|11\rangle &=\quad \mid\uparrow\uparrow\rangle \\\\ 
|1(-1)\rangle &=\quad \mid \downarrow\downarrow \rangle 
 \end{cases}
$$

The singlet has $s=0$ and $m=0$:

$$
\begin{cases}
|00\rangle = \frac{1}{\sqrt{2}}\Big(\mid \uparrow\downarrow  \rangle - \mid \downarrow \uparrow \rangle\Big)
\end{cases}
$$

$$
\hat{S} = S^{(1)}\otimes 1 + 1\otimes S^{(2)}
$$