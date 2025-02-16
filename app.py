import matplotlib.pyplot as plt

# Example data for training and validation accuracy (you can replace this with your actual data)
epochs = range(1, 12)  # Epochs 1 through 11
training_accuracy = [50, 57, 60, 65, 69, 74, 73, 79, 84, 87, 89]
validation_accuracy = [49, 55, 58, 62, 67, 70, 71, 79, 81, 84, 87]

# Plotting the graph
plt.plot(epochs, training_accuracy, label='Training', color='blue')
plt.plot(epochs, validation_accuracy, label='Validation', color='orange')

# Adding titles and labels
plt.title('Model Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')

# Show legend
plt.legend()

# Display the plot
plt.show()
