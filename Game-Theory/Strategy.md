A **strategy** for a [[combinatorial game]] is a map from positions to arrows incident on that position.

Mixed strategy
: Assignment of probability to each pure strategy.

Pure strategy
: A deterministic mixed strategy (think standard basis vector).

Fully mixed strategy
: A mixed strategy that has positive weight on all options.

# Safety Strategy
Say we're playing a [[zero-sum game]]. For player 1, safety strategy $x_*$ has

$$
\min_y x_*^\mathsf{T} Cy = V.
$$

For player II, $y_*$ such that

$$
\max_x x^\mathsf{T} Cy_* = V.
$$

A safety strategy will yield an expected gain/loss of at least/most $V$, the value of the game.