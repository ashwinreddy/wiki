The **Laplace transform** is an [[integral transform]].

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \doteq \int_0^\infty f(t) e^{-st} \dd{t}
\end{equation}

The transform can be used to turn [[differential equation]] into algebraic ones that can be solved easily and converted back into solutions.

|$f(t)$|$F(s)$|
|------|:------:|
|[[Dirac delta function]] $\delta(t-a)$|$e^{-sa}$ when $a>0$|
|[[Derivative]] $f'(t)$|$s \mathscr{L}\left\\{f(t)\right\\} -f(0)$|
|$e^{at}$|$\frac{1}{s-a}$|
|[[Convolution]]|Multiplication|


# Properties

* [[Linear map]]