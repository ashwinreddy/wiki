The **Laplace transform** is an [[integral transform]] using a decaying [[exponential function]]. 

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_0^\infty f(t) e^{-st} \dd{t} \tag{Unilateral Laplace}
\end{equation}

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_{-\infty}^\infty f(t) e^{-st} \dd{t} \tag{Bilateral Laplace}
\end{equation}

where $s$ is a [[complex number]]. The [[Fourier transform]] is recovered for the bilateral Laplace if $s = \iota \omega$. 

The transform can be used to turn [[differential equation]] into algebraic ones that can be solved easily and converted back into solutions.


# Origin

As [this](https://www.youtube.com/watch?v=hqOboV2jgVo) video explains, the Laplace transform is the continuous version of the LHS in

$$
\sum_{n=0}^\infty a_n x^n \to \int_0^\infty a(t) x^t \dd{t}
$$

We replace $x^t$ with $e^{-st}$ to make it easier to work with.

# Properties

* [[Linear map]]

# Table

|$f(t)$|$F(s)$|
|------|:------:|
|[[Dirac delta function]] $\delta(t-a)$|$e^{-sa}$ when $a>0$|
|[[Derivative]] $f'(t)$|$s F(s) -f(0)$|
|$e^{at}$|$\frac{1}{s-a}$|
|[[Convolution]]|Multiplication|