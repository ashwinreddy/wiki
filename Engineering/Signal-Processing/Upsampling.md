**Upsampling** is expanding a [[signal]] by expanding by a factor of $N$ and inserting 0s. Then you can [[sinc]] interpolate to recover.

$$
y_{\leftrightarrow N} = \begin{cases}y[n/N] & n = 0, \pm N, \pm 2N, \dots \\\\ 0\end{cases}
$$