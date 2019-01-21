Rate-distortion $R(\delta)$ depends only on the source. Roughly, $R(\delta)$ measures how many bits of information the source must output if you are willing to tolerate a distortion of at most $\delta$.

The capacity cost function $C(\beta)$ depends only on the channel. Roughly, $C(\beta)$ is how many bits of information the channel can transmit if you have a cost of $\beta$.

Shannon's theorem says one can build an encoder/decoder that achieves a performance of $\delta$ at a cost of $\beta$ iff $R(\delta) < C(\beta)$.

Picture

<img src="/uploads/buffered-channel.jpg">