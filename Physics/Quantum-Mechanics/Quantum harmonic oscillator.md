The **quantum harmonic oscillator** is the quantum mechanical analog of the [[harmonic oscillator]] from classical mechanics. Specifically, we consider 

$$
V(x) = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2
$$

We can then consider the [[T.I.S.E.|Schrodinger equation#time-independent-schrodinger-equation]]

\begin{equation}
-\frac{\hbar\^2}{2m}\frac{\dd{}^2 \psi}{\dd{} x^2} + \frac{1}{2}m\omega\^2x^2\psi = E\psi
\end{equation}

Using more suggestive operator notation,

\begin{equation}
\frac{1}{2m}\left[ \hat{p}^2 + \left(m\omega \hat{x} \right)^2 \right]\psi = E\psi
\end{equation}

How do we solve this? One approach is to use ladder operators. We define operators

$$
\hat{a}_{\pm} = \frac{1}{\sqrt{2\hbar m\omega}}\left( \mp \iota \hat{p} + m\omega\hat{x} \right)
$$

It turns out that

\begin{gather}
\hat{a}\_{-}\hat{a}_{+} = \frac{1}{\hbar\omega}\hat{H} + \frac{1}{2} \\\\
\hat{a}\_{+}\hat{a}_{-} = \frac{1}{\hbar\omega}\hat{H} - \frac{1}{2}
\end{gather}