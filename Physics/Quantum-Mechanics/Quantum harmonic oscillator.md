The **quantum harmonic oscillator** is the quantum mechanical analog of the [[harmonic oscillator]] from classical mechanics. Specifically, we consider 

$$
V(x) = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2
$$

We can then consider the [[T.I.S.E.|Schrodinger equation#time-independent-schrodinger-equation]]

\begin{equation}
-\frac{\hbar\^2}{2m}\frac{\dd{}^2 \psi}{\dd{} x^2} + \frac{1}{2}m\omega\^2x^2\psi = E\psi
\end{equation}

How do we solve this? One approach is to use ladder operators!

\begin{equation
\frac{1}{2m}\left[ \hat{p}^2 + \left(m\omega \hat{x} \right)^2 \right]\psi = E\psi
\end{equation}

We define

$$
\hat{a}_{\pm} = \frac{1}{\sqrt{2\hbar m\omega}}\left( \mp \iota \hat{p} + m\omega\hat{x} \right)
$$

Then,

$$
\hat{a}\_{-}\hat{a}_+ = \frac{1}{2\hbar m \omega}\left(\iota\hat{p} +m\omega\hat{x}\right)\left(-\iota\hat{p} +m\omega\hat{x}\right) = \frac{\hat{H}}{\hbar\omega} - \iota m\omega\left(\hat{x}\hat{p} - \hat{p}\hat{x}\right)\cdot\frac{1}{2\hbar m\omega}
$$

$$
[\hat{a}\_{-}, \hat{a}_{+}] = 1
$$

So we have

$$
\hat{H} \psi = E\psi \iff \hbar\omega\left( \hat{a}_{+}\hat{a}\_{-} + \frac{1}{2} \right)\psi = E\psi
$$

The commutator is

$$
[\hat{x}, \hat{p}] = i\hbar
$$