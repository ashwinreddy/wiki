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

Depending on the order in which you multiply the operators, you get the following (read the upper signs all the way across or the lower signs all the way across)

\begin{gather}
\hat{a}\_{\mp}\hat{a}\_{\pm} = \frac{1}{\hbar\omega}\hat{H} \pm \frac{1}{2}
\end{gather}

Then, if $\psi$ is an eigenstate with energy $E$, $\hat{a}_+ \psi$ has energy $E + \hbar\omega$. If we know one solution, we can generate off more by stepping through in this way. It turns out there is a lowest rung,

$$
\hat{a}_{-} \psi_0 = 0
$$

$$
\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \exp\left(-\frac{m\omega}{2\hbar}x^2\right)
$$