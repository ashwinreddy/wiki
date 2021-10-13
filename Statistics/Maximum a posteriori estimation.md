**Maximum a posteriori estimation (MAP)** is [[maximum likelihood estimation]] for some hidden $X$ when you observe $Y$ with a prior probability $\pi(x)$. 

$$
\hat{\theta}_{\mathsf{MAP}} =  \arg\max_x \Pr(X =x \mid Y =y ) = \arg\max_x \Pr(Y =y \mid X = x) \pi(x).
$$