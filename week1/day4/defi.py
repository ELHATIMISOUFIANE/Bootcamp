import math


class Pagination:
    def __init__(self, items, pageSize):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 1
        self.totalPages = math.ceil(len(self.items) / pageSize)
        self.data = {}  # Initialize data as a dictionary to store pages

        # Fill self.data with pages
        for i in range(0, self.totalPages):
            self.data[i + 1] = self.items[i * self.pageSize: (i + 1) * self.pageSize]

    def getVisibleItems(self):
        # Return the items on the current page
        return self.data.get(self.currentPage, [])

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1

    def previousPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1

    def goToPage(self, pageNumber):
        if 1 <= pageNumber <= self.totalPages:
            self.currentPage = pageNumber


# Example usage
items = [i for i in range(1, 21)]  # List of items from 1 to 20
pagination = Pagination(items, 5)

print("Total Pages:", pagination.totalPages)  # Output: Total Pages: 4
print("Items on current page:", pagination.getVisibleItems())  # Output: Items on current page: [1, 2, 3, 4, 5]

pagination.nextPage()
print("Items on current page after next:",
      pagination.getVisibleItems())  # Output: Items on current page after next: [6, 7, 8, 9, 10]

pagination.goToPage(3)
print("Items on page 3:", pagination.getVisibleItems())  # Output: Items on page 3: [11, 12, 13, 14, 15]
