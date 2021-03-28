The **Nyquist theorem** says that if you want to reproduce a continuous signal from its samples, you should sample it at a rate that is twice the highest frequency you want to record.

# Formal Statement

> Suppose $x(t)$ is bandlimited with maximum frequency $B$ Hz. Then, it is sufficient to sample the signal $x[n] = x(nT_s)$ if the sampling frequency $f_s = \frac{1}{T_s}$ is greater than or equal to the Nyquist sampling rate.

\begin{equation}
f_s \geqslant 2B
\end{equation}