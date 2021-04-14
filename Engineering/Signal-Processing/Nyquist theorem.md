The **Nyquist theorem** answers the question "can we reconstruct a continuous-time signal from discrete samples without loss of information?"


The answer is that you should sample it at a rate that is twice the highest frequency you want to record, then do a sinc interpolation.

1. Push $x[n]$ into its [[frequency domain]] by [[Discrete-Time Fourier transform]].
2. Run this through an ideal low-pass filter (sinc interpolation).
3. Run the inverse Fourier transform to get $x(t)$.

# Formal Statement

> Suppose $x(t)$ is bandlimited with maximum frequency $B$ Hz. Then, it is sufficient to sample the signal $x[n] = x(nT_s)$ if the sampling frequency $f_s = \frac{1}{T_s}$ is greater than or equal to the Nyquist sampling rate.

\begin{equation}
f_s \geqslant \text{Nyquist rate} = 2B. \tag{Nyquist criterion}
\end{equation}