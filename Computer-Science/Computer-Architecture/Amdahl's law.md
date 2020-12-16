**Amdahl's law** says that if you speed up part of a program, the speed up of the whole program is bounded by the size of that part. 


$$
\mathsf{Speedup} = \frac{1}{s + \frac{1-s}{p}}
$$

$$
\lim_{p \to\infty} \mathsf{Speedup} = \frac{1}{s}
$$

<<Note("needs work")>>