**Aliasing** is when a high frequency component in the frequency spectrum of signal takes the identity of a lower frequency component in the spectrum of the sampled signal. Roughly, it is spectral overlapping, i.e. when the frequency spectrum folds over with other frequency components due to replication as a result of sampling.

Aliasing happens if 

* the signal doesn't have a find bandwidth, or
* the [[sampling]] rate is too low.

The [[Nyquist theorem]] tells us how to avoid aliasing:

> By the Nyquist criterion, the sampling frequency $\omega_s$ should exceed the total bandwidth. For real signals, this is twice the highest frequency in the signal, which is commonly known as the Nyquist rate. However, the spectrum of complex signals is not conjugate-symmetric, so the bandwidth can be less than twice the highest frequency.

> A sufficient condition for avoiding aliasing is for the adjacent spectral replicas in frequency space to not overlap since we can always pass it through a [[sinc filter]] to recover the original frequencies and signal, exactly.

