A **combinatorial game** has 2 players, a [[set]] of positions $X$, a subset of positions called terminal sets that indicate a win for a player, and legal moves from each player and position. Combinatorial games can either be [[impartial|impartial game]] or [[partisan|partisan game]].

# Gameplay

Players take turns making moves, which we can think of as happening on a [[directed graph]].

Normal play
: Game ends when somebody can't move and so loses.

# Progressive bounding

Let $B(x)$ be the maximum number of moves from starting state $x \in X$ to a terminal position.

Progressively bounded
: A combinatorial game is progressively bounded if for any starting position, $B(x) \leqslant \infty$.

A game with "loops" between states won't be progressively bounded.

# Examples

* [[Chomp]]
* [[Subtraction]]
