The **quantum harmonic oscillator** is the quantum mechanical analog of the [[harmonic oscillator]] from classical mechanics. Specifically, we consider the potential.

\begin{equation\*}
V(x) = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2
\end{equation\*}

We can then consider solving the [[T.I.S.E.|Schrodinger equation#time-independent-schrodinger-equation]]

\begin{equation}
\label{eq:tise}
-\frac{\hbar\^2}{2m}\frac{\dd{}^2 \psi}{\dd{} x^2} + \frac{1}{2}m\omega\^2x^2\psi = E\psi
\end{equation}

# Algebraic Method

We can write Equation \ref{eq:tise} in a more suggestive notation with operators:

\begin{equation}
\frac{1}{2m}\left[ \hat{p}^2 + \left(m\omega \hat{x} \right)^2 \right]\psi = E\psi
\end{equation}

Next, we define operators

$$
\hat{a}_{\pm} \equiv \frac{1}{\sqrt{2\hbar m\omega}}\left( \mp \iota \hat{p} + m\omega\hat{x} \right)
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

and it has energy $E_0 = \frac{1}{2}\hbar\omega$. In addition,

$$
\hat{a}\_+ \psi_n = \sqrt{n+1}\psi_{n+1},\qquad \hat{a}\_{-} \psi_n = \sqrt{n} \psi_{n-1}
$$ The nth state has

$$
\psi_n(x) = \frac{1}{\sqrt{n!}}\left(\hat{a}_+\right)^n \psi_0(x), \qquad E_n = \left(n+\frac{1}{2}\right)\hbar\omega
$$
