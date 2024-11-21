package main

import "strings"

func capitaliceFirstLetter(s string) string {
	if len(s) == 0 {
		return s
	}

	return strings.ToUpper(s[:1]) + s[1:]
}
