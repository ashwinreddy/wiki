**Upsampling** is expanding a [[signal]] by expanding by a factor of $N$ and inserting 0s, opposite of [[downsampling]]. Then you can [[low pass filter]] (sinc interpolate) to recover the upsampled version.

$$
y_{\leftrightarrow N}[n] = \begin{cases}y[n/N] & n = 0, \pm N, \pm 2N, \dots \\\\ 0\end{cases}
$$

$$
y_{\uparrow N}[n] = y_{\leftrightarrow N}[n] * \left(\frac{2\pi}{N}\operatorname{sinc}\left(\frac{2\pi}{N}n\right)\right)
$$
