# LaTeX Makefile v0.33 -- LaTeX only

SRCDIR=src
SRCFILE=main
SHELL=/bin/zsh   # for the while loop below

all:  ## Compile paper
	cd "$(SRCDIR)" && rubber --pdf "$(SRCFILE).tex"

clean:  ## Clean output files
	cd "$(SRCDIR)" && rubber --clean "$(SRCFILE).tex"

watch:  ## Recompile on updates to the source file
	@while [ 1 ]; do; inotifywait $(SRCDIR)/**/*.tex; sleep 0.01; make all; done
	# for Bash users, replace the while loop with the following
	# @while true; do; inotifywait $(PAPER); sleep 0.01; make all; done
