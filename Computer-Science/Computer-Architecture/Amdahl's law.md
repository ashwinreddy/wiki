**Amdahl's law** says that if you speed up part of a program, the speed up of the whole program is bounded by the size of that part. 


$$
\mathsf{Speedup} = \frac{1}{s + \frac{1-s}{p}}
$$

**Example.** The execution time of 4/5 of a program can be accelerated by a factor of 6. What is the program speed up overall?

$$
\mathsf{Speedup} = \frac{1}{1/5 + \frac{4/5}{16}}=4
$$

$$
\lim_{p \to\infty} \mathsf{Speedup} = \frac{1}{s}
$$

<<Note("needs work")>>