A **function** is a machine that produces 1 output (of a specified type) when given an input of a specified type, not neccessarily the same type as the output. 


Formally, it is a [[binary relation]] that represents a mapping, a rule that associates every input/source element in the domain [[set]] with an output/target element. We restrict the relation so that every element in the domain gets mapped and gets mapped to exactly one element.

\begin{align\*}
f: \mathsf{Domain} &\to \mathsf{Codomain} \\\\\
x &\mapsto y = f(x)
\end{align\*}

We call $x$ the independent variable and $y$ the dependent variable.

Range
: The range of $f$ is $\\{f(x) \mid x \in \mathsf{Domain}\\}$

# Classifications

* [[Surjection]], [[injection]], and [[bijection]]
* If a function is $f: \RR \to \RR$, it can be decomposed into [[even function]] and [[odd function]]:

$$
f(x) = \overbrace{\frac{1}{2}\left( f(x) + f(-x) \right)}^{f_e(x)} + \overbrace{\frac{1}{2}\left( f(x) - f(-x) \right)}^{f_o(x)}
$$