run_env() {
	run_env "$1" "$2" "$3" --output_path ~/Research/results
}

run_env HalfCheetah v3 half-cheetah

run_env Sawyer Hammer-v0 sawyer-hammer
run_env Sawyer StickPull-v0 sawyer-stickpull
run_env Sawyer DialTurn-v0 sawyer-dialturn
run_env Sawyer PushWithWall-v0 sawyer-pushwithwall
run_env Sawyer StickPush-v0 sawyer-stickpush
run_env Sawyer PegInsertion-v0 sawyer-peginsertion

run_env Hand Door-v0 hand-door
run_env Hand Hammer-v0 hand-hammer
run_env Hand Pen-v0 hand-pen
run_env Hand Relocate-v0 hand-relocate
