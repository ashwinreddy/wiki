The **Fisher information** is a measurement for how much information a [[random variable]] $X$ carries about the parameter $\theta$ that generates it, how well you can estimate the parameter from the observations. When you have many parameters, the Fisher information is a matrix.

$$
\mathcal{I}(\theta) = -\mathbb{E}_\theta \left[\frac{\partial^2 \log P\left(\vec{x} \mid \theta \right)}{\partial \theta^2} \right]
$$

Formally, it is computed using the [[score]].

$$
\mathcal{I}\_X(\theta) \triangleq \mathbb{E}\_{p_\theta}[s(\theta)^2]
$$

[[https://gregorygundersen.com/blog/2019/11/21/fisher-information/]]
[[https://wiseodd.github.io/techblog/2018/03/11/fisher-information/]]