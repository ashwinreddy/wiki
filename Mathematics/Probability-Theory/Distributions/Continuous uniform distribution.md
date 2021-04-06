**Continuous uniform distribution**

\begin{equation}
X \sim \mathsf{Uniform}(a,b) \iff \varphi(x) = \begin{cases}\frac{1}{b-a} & a \leq x \leq b \\\\ 0 & \text{otherwise}\end{cases}
\end{equation}

$$
F_X(x) = \begin{cases} 0 & x < a \\\\ \frac{x-a}{b-a} & a \leq x \leq b \\\\ 1 & x > b \end{cases}
$$

$$
M_X(t) = \begin{cases} { e^{tb}-e^{ta} \over {t(b-a)}} & t \neq 0 \\\\ 1& t = 0 \end{cases}
$$

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$$\frac{a+b}{2}$$|
|[[Variance]]|$$\frac{1}{12}\left(b-a\right)^2$$|