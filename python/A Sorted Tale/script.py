import utils
import sorts

bookshelf = utils.load_books('books_small.csv')

for book in bookshelf:
  print(book["title"])

print("code point of a: "+ str(ord("a")))
print("code point of ' ': "+ str(ord(" ")))
print("code point of A: "+ str(ord("A")))

def by_title_ascending(book_a, book_b):
  return book_a["title_lower"] > book_b["title_lower"]

sort_1 = sorts.bubble_sort(bookshelf, by_title_ascending)

#for book in sort_1:
print(book["title"])

bookshelf_v1 = bookshelf.copy()

def by_author_ascending(book_a, book_b):
  return book_a["author_lower"] > book_b["author_lower"]

sort_2 = sorts.bubble_sort(bookshelf_v1, by_author_ascending)

#for book in sort_2:
print(book["author"])

bookshelf_v2 = bookshelf.copy()
sorts.quicksort(bookshelf_v2, 0, len(bookshelf_v2) - 1, by_author_ascending)

for book in bookshelf_v2:
  print(book["author"])

def by_total_length(book_a,book_b):
  return len(book_a["title"]+book_a["author"]) > len(book_b["title"]+book_b["author"])

long_bookshelf = utils.load_books('books_large.csv')

sort_3 = sorts.bubble_sort(long_bookshelf, by_total_length)

sorts.quicksort(long_bookshelf, 0, len(long_bookshelf) - 1, by_total_length)







